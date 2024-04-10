import React, { useState } from "react";
import { Box, VStack, HStack, Text, Button, useToast } from "@chakra-ui/react";
import { FaWallet, FaPlus, FaMoneyBillWave, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [usdBalance, setUsdBalance] = useState(0);
  const [ngnBalance, setNgnBalance] = useState(0);
  const navigate = useNavigate();
  const toast = useToast();

  

  return (
    <Box p={4}>
      <VStack spacing={6} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            Virtual Wallet
          </Text>
          <FaWallet size={24} />
        </HStack>
        <VStack spacing={6}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              USD Balance: ${usdBalance.toFixed(2)}
            </Text>
            <Button leftIcon={<FaPlus />} onClick={() => navigate("/add-card?currency=USD")}>
              Add USD Card
            </Button>
            <Button leftIcon={<FaMoneyBillWave />} onClick={() => navigate("/load-funds?currency=USD")}>
              Load USD Funds
            </Button>
            <Button onClick={() => navigate("/transaction?currency=USD")}>USD Transaction</Button>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              NGN Balance: ₦{ngnBalance.toFixed(2)}
            </Text>
            <Button leftIcon={<FaPlus />} onClick={() => navigate("/add-card?currency=NGN")}>
              Add NGN Card
            </Button>
            <Button leftIcon={<FaMoneyBillWave />} onClick={() => navigate("/load-funds?currency=NGN")}>
              Load NGN Funds
            </Button>
            <Button onClick={() => navigate("/transaction?currency=NGN")}>NGN Transaction</Button>
          </Box>
        </VStack>
        <Button leftIcon={<FaCog />}>Settings</Button>
      </VStack>
    </Box>
  );
};

export default Index;
