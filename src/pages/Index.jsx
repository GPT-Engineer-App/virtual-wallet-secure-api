import React, { useState } from "react";
import { Box, VStack, HStack, Text, Button, Image, Input, Select, useToast } from "@chakra-ui/react";
import { FaWallet, FaPlus, FaMoneyBillWave, FaCog } from "react-icons/fa";

const Index = () => {
  const [balance, setBalance] = useState(0);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const handleAddCard = () => {
    // TODO: Implement add card functionality using Google Pay API or Apple Pay API
    // For demo purposes, adding a dummy card
    const newCard = {
      id: cards.length + 1,
      last4: Math.floor(1000 + Math.random() * 9000),
    };
    setCards([...cards, newCard]);
    toast({
      title: "Card Added",
      description: "Your virtual travel card has been added successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleLoadFunds = () => {
    // TODO: Implement load funds functionality using Bank API or Third-party Payment Gateway API
    // For demo purposes, adding a fixed amount to the balance
    const loadAmount = 100;
    setBalance(balance + loadAmount);
    setAmount("");
    toast({
      title: "Funds Loaded",
      description: `$${loadAmount} has been loaded into your virtual wallet.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleTransaction = () => {
    // TODO: Implement transaction functionality
    // For demo purposes, deducting the entered amount from the balance
    const transactionAmount = parseFloat(amount);
    if (transactionAmount <= balance) {
      setBalance(balance - transactionAmount);
      setAmount("");
      toast({
        title: "Transaction Successful",
        description: `$${transactionAmount} has been deducted from your virtual wallet.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Insufficient Funds",
        description: "Your virtual wallet balance is insufficient for this transaction.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={6} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            Virtual Wallet
          </Text>
          <FaWallet size={24} />
        </HStack>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Balance: ${balance.toFixed(2)}
          </Text>
          <HStack>
            <Button leftIcon={<FaPlus />} onClick={handleAddCard}>
              Add Card
            </Button>
            <Button leftIcon={<FaMoneyBillWave />} onClick={handleLoadFunds}>
              Load Funds
            </Button>
          </HStack>
        </Box>
        <VStack align="stretch" spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            Your Cards
          </Text>
          {cards.map((card) => (
            <Box key={card.id} bg={selectedCard === card.id ? "blue.500" : "white"} p={4} borderRadius="md" boxShadow="md" cursor="pointer" onClick={() => setSelectedCard(card.id)}>
              <HStack justify="space-between">
                <Text fontSize="lg" fontWeight="bold" color={selectedCard === card.id ? "white" : "black"}>
                  **** **** **** {card.last4}
                </Text>
                <Image src="https://images.unsplash.com/photo-1631084854605-2ea7de264ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwaWNvbnxlbnwwfHx8fDE3MTI3MzA4Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Card" boxSize="40px" />
              </HStack>
            </Box>
          ))}
        </VStack>
        <VStack align="stretch" spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            Make a Transaction
          </Text>
          <Select placeholder="Select a Card" value={selectedCard} onChange={(e) => setSelectedCard(e.target.value)}>
            {cards.map((card) => (
              <option key={card.id} value={card.id}>
                **** **** **** {card.last4}
              </option>
            ))}
          </Select>
          <Input placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <Button onClick={handleTransaction} disabled={!selectedCard || !amount}>
            Make Transaction
          </Button>
        </VStack>
        <Button leftIcon={<FaCog />}>Settings</Button>
      </VStack>
    </Box>
  );
};

export default Index;
