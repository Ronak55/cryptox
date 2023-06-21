import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Button} from '@chakra-ui/react'
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const [exchanges, setexchanges] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);
    const [page, setpage] = useState(1);

    const changePage = (page) => {

        setpage(page);
        setloading(true);
    }

    const btns = new Array(132).fill(1);

    useEffect(() => {

        const fetchexchanges = async () => {

            try {
                const { data } = await axios.get(`${server}/exchanges`);

                setexchanges(data);
                setloading(false);

            } catch (error) {

                seterror(true);
                setloading(false);

            }

        };

        fetchexchanges();


    }, []);

    if (error) return <ErrorComponent message={"Error while fetching messages"} />


    return (
        <Container maxW={"container.xl"}>


            {loading ? <Loader /> :

                <>
                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {
                            exchanges.map((i) => (
                                <ExchangeCard
                                    name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
                            ))
                        }
                    </HStack>
                    <HStack w="full" overflowX="auto" p="8">
                        {btns.map((item, index) => (
                            <Button key={index} bgColor="blackAlpha.900" color="white" onClick={() => changePage(index + 1)}>
                                {index + 1}
                            </Button>
                        ))}
                    </HStack>
                </>
                }
        </Container>

    )
}


export default Exchanges