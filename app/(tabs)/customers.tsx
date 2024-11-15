import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { users, projects, getUserById } from "../../constants/SampleData";
import { Appearance } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../auth-context";
import { ProjectInfoModal } from "@/components/ProjectInfo";

// Detect if the current theme is dark or light
const isDarkMode = Appearance.getColorScheme() === "dark";

const Customers = () => {
  const { email } = useAuth(); // getting here the email of the facilitator to find its id
  const facilitator = users.find((user) => user.email === email);
  const fac_id = facilitator ? facilitator.id : null;

  // Get projects handled by the facilitator
  const Projects = projects.filter(
    (project) => project.facilitatorId === fac_id
  );

  // Get IDs of customers linked to the facilitator
  const yourCustomersIds = Projects.map((project) => project.customerId);

  // Separate customers into yours and others
  const currentCustomers = users.filter(
    (user) => user.role === "Customer" && yourCustomersIds.includes(user.id)
  );
  const otherCustomers = users.filter(
    (user) => user.role === "Customer" && !yourCustomersIds.includes(user.id)
  );

  // State to control modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const handleOpenModal = (projectId: number) => {
    setSelectedProjectId(projectId);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProjectId(null);
  };

  // Render a customer card
  const renderCustomer = ({ item }: { item: (typeof users)[0] }) => {
    // Find the project for the customer (if exists)
    const project = Projects.find((project) => project.customerId === item.id);

    return (
      <TouchableOpacity
        className={`rounded-xl p-4 my-2 ${
          isDarkMode ? "bg-[#232533]" : "bg-white"
        } shadow-lg`}
        onPress={() => project && handleOpenModal(project.projectId)}
      >
        <Text
          className={`text-xl font-semibold ${
            isDarkMode ? "text-[#E0E0E0]" : "text-[#333333]"
          } mb-2`}
        >
          {item.name}
        </Text>

        <View className="flex-row items-center mb-2">
          <MaterialIcons
            name="email"
            size={20}
            color={isDarkMode ? "#B0B0B0" : "#555555"}
          />
          <Text
            className={`text-base ${
              isDarkMode ? "text-[#B0B0B0]" : "text-[#555555]"
            } mb-1`}
          >
            {"  "}
            {item.email}
          </Text>
        </View>

        <View className="flex-row items-center mb-2">
          <MaterialIcons
            name="location-on"
            size={20}
            color={isDarkMode ? "#B0B0B0" : "#555555"}
          />
          <Text
            className={`text-base ${
              isDarkMode ? "text-[#B0B0B0]" : "text-[#555555]"
            }`}
          >
            {"  "}
            {item.address}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      className={`flex-1 p-4 ${isDarkMode ? "bg-[#161622]" : "bg-[#F9F9F9]"}`}
    >
      <Text
        className={`text-3xl font-extrabold mb-5 ${
          isDarkMode ? "text-white" : "text-[#333333]"
        }`}
      >
        Customers
      </Text>

      {/* Facilitator's Customers */}
      <Text
        className={`text-xl font-bold mb-2 ${
          isDarkMode ? "text-white" : "text-[#333333]"
        }`}
      >
        Your Customers
      </Text>
      {currentCustomers.length > 0 ? (
        <FlatList
          data={currentCustomers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCustomer}
        />
      ) : (
        <Text
          className={`text-base ${
            isDarkMode ? "text-[#B0B0B0]" : "text-[#555555]"
          }`}
        >
          No current customers.
        </Text>
      )}

      {/* Other Customers */}
      <Text
        className={`text-xl font-bold mt-6 mb-2 ${
          isDarkMode ? "text-white" : "text-[#333333]"
        }`}
      >
        Others' Customers
      </Text>
      {otherCustomers.length > 0 ? (
        <FlatList
          data={otherCustomers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCustomer}
        />
      ) : (
        <Text
          className={`text-base ${
            isDarkMode ? "text-[#B0B0B0]" : "text-[#555555]"
          }`}
        >
          No other customers.
        </Text>
      )}

      {/* Show the Project Info Modal */}
      {modalVisible && selectedProjectId !== null && (
        <ProjectInfoModal projectId={selectedProjectId} onClose={handleCloseModal} />
      )}
    </SafeAreaView>
  );
};

export default Customers;
