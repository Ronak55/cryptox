import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react'
import Loader from './Loader';
import CoinsCard from './CoinsCard';
import ErrorComponent from './ErrorComponent';

const Coins = () => {

    const [coins, setcoins] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);
    const [page, setpage] = useState(1);

    const [currency, setcurrency] = useState("inr");

    const changePage = (page) => {

        setpage(page);
        setloading(true);
    }

    const btns = new Array(132).fill(1);

    const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    useEffect(() => {

        const fetchcoins = async () => {

            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

                setcoins(data);
                setloading(false);
                console.log(data);

            } catch (error) {

                seterror(true);
                setloading(false);

            }

        };

        fetchcoins();


    }, [currency, page]);

    if (error) return <ErrorComponent message={"Error while fetching Coins"} />


    return (
        <Container maxW={"container.xl"}>
            {loading ? <Loader /> :
                <>
                    <RadioGroup value={currency} onChange={setcurrency} p={"8"}>
                        <HStack spacing={"4"}>
                            <Radio value={"inr"}>₹</Radio>
                            <Radio value={"usd"}>$</Radio>
                            <Radio value={"eur"}>€</Radio>

                        </HStack>
                    </RadioGroup>

                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {
                            coins.map((i) => (
                                <CoinsCard id={i.id} name={i.name} price={i.current_price} img={i.image} symbol={i.symbol} currencySymbol={currencySymbol} />
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

export default Coins