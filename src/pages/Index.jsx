import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button, Input, Select, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [trainingData, setTrainingData] = useState("");
  const [pair, setPair] = useState("EUR/USD");
  const [balance, setBalance] = useState(10000);
  const [equity, setEquity] = useState(10000);

  useEffect(() => {
    // Simulated equity change
    const interval = setInterval(() => {
      setEquity((equity) => equity + (Math.random() - 0.5) * 100);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const trainModel = () => {
    setIsTraining(true);

    // Simulated model training
    setTimeout(() => {
      setIsTraining(false);
      alert("Model trained successfully!");
    }, 2000);
  };

  return (
    <Box p={8}>
      <Heading mb={8}>
        <FaRobot style={{ display: "inline-block", marginRight: "10px" }} />
        Forex Trading Bot
      </Heading>

      <Box mb={8}>
        <Text mb={2}>Upload historical price data to train the model:</Text>
        <Input type="file" mb={4} onChange={(e) => setTrainingData(e.target.files[0])} />
        <Button colorScheme="blue" onClick={trainModel} isLoading={isTraining}>
          Train Model
        </Button>
      </Box>

      <Box mb={8}>
        <Text mb={2}>Select currency pair:</Text>
        <Select value={pair} onChange={(e) => setPair(e.target.value)}>
          <option>EUR/USD</option>
          <option>GBP/USD</option>
          <option>USD/JPY</option>
        </Select>
      </Box>

      <Stat mb={8}>
        <StatLabel>Account Balance</StatLabel>
        <StatNumber>${balance.toFixed(2)}</StatNumber>
      </Stat>

      <Stat>
        <StatLabel>Account Equity</StatLabel>
        <StatNumber>${equity.toFixed(2)}</StatNumber>
        <StatHelpText>{equity > balance ? "📈 Profit" : "📉 Loss"}</StatHelpText>
      </Stat>
    </Box>
  );
};

export default Index;
