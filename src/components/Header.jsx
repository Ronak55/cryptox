import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p="4" shadow="base" bgColor="blackAlpha.900" transition="background-color 0.3s ease" >
      <Button
        
        variant="unstyled"
        px={"10"}
        color="white"
        _hover={{ backgroundColor: 'rgba(255, 255, 255)' , color:'black'}}
        transition="background-color color 0.1s ease"
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant="unstyled"
        px={"10"}
        
        color="white"
        _hover={{ backgroundColor: 'rgba(255, 255, 255)' , color:'black'}}
        transition="background-color color 0.3s ease"
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        variant="unstyled"
        px={"10"}
        color="white"
        _hover={{ backgroundColor: 'rgba(255, 255, 255)' , color:'black'}}
        transition="background-color color 0.3s ease"
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
