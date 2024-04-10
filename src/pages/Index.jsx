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
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold" mb={2} color="black">
              USD Balance: ${usdBalance.toFixed(2)}
            </Text>
            <Button leftIcon={<FaPlus />} onClick={() => navigate("/add-card?currency=USD")} colorScheme="blue">
              Add USD Card
            </Button>
            <Button leftIcon={<FaMoneyBillWave />} onClick={() => navigate("/load-funds?currency=USD")} colorScheme="blue">
              Load USD Funds
            </Button>
            <Button onClick={() => navigate("/transaction?currency=USD")} colorScheme="blue">
              USD Transaction
            </Button>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold" mb={2} color="black">
              NGN Balance: ₦{ngnBalance.toFixed(2)}
            </Text>
            <Button leftIcon={<FaPlus />} onClick={() => navigate("/add-card?currency=NGN")} colorScheme="blue">
              Add NGN Card
            </Button>
            <Button leftIcon={<FaMoneyBillWave />} onClick={() => navigate("/load-funds?currency=NGN")} colorScheme="blue">
              Load NGN Funds
            </Button>
            <Button onClick={() => navigate("/transaction?currency=NGN")} colorScheme="blue">
              NGN Transaction
            </Button>
          </Box>
        </VStack>
        <Button leftIcon={<FaCog />} colorScheme="blue">
          Settings
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
