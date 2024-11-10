export interface User {
  id: number;
  name: string;
  age: number;
  gender: "Male" | "Female";
  role: "Facilitator" | "Customer";
  address: string;
  email: string;
}

export interface Project {
  projectId: number;
  name: string;
  description: string;
  customerId: number;
  facilitatorId: number;
  startDate: string;
  endDate: string;
  status: "On-Going" | "Completed";
}

export const users: User[] = [
  {
    id: 1,
    name: "Joshua Gocotano",
    age: 23,
    gender: "Male",
    role: "Facilitator",
    address: "123 Main St, Springfield",
    email: "gocotano.joshua02@gmail.com",
  },
  {
    id: 2,
    name: "Angelie Gecole",
    age: 22,
    gender: "Female",
    role: "Customer",
    address: "456 Elm St, Riverside",
    email: "gecole.angelie@gmail.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 35,
    gender: "Male",
    role: "Facilitator",
    address: "789 Oak Ave, Greenville",
    email: "michaelbrown@example.com",
  },
  {
    id: 4,
    name: "Emily Johnson",
    age: 24,
    gender: "Female",
    role: "Customer",
    address: "321 Maple St, Hilltown",
    email: "emilyjohnson@example.com",
  },
  {
    id: 5,
    name: "Sarah Williams",
    age: 29,
    gender: "Female",
    role: "Customer",
    address: "654 Pine Dr, Lakeview",
    email: "sarahwilliams@example.com",
  },
];

export const projects: Project[] = [
  {
    projectId: 101,
    name: "Springfield Park",
    description: "Renovation of the central park in Springfield, adding a hybrid solar system",
    customerId: 2,  // Angelie Gecole
    facilitatorId: 1,  // Joshua Gocotano
    startDate: "2024-11-01",
    endDate: "2025-05-01",
    status: "On-Going",
  },
  {
    projectId: 102,
    name: "Greenville Expansion",
    description: "Expanding the Greenville solar energy system to save more",
    customerId: 4,  // Emily Johnson
    facilitatorId: 3,  // Michael Brown
    startDate: "2024-12-15",
    endDate: "2025-06-30",
    status: "Completed",
  },
  {
    projectId: 103,
    name: "Lakeview Community Center",
    description: "Construction of a new community center in Lakeview with an Off-Grid solar system",
    customerId: 5,  // Sarah Williams
    facilitatorId: 1,  // Joshua Gocotano
    startDate: "2024-11-10",
    endDate: "2025-04-20",
    status: "On-Going",
  },
];

// Function to get a user by ID
export const getUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

// Function to get projects for a given user (either customer or facilitator)
export const getProjectsByUserId = (userId: number): Project[] => {
  return projects.filter(
    (project) => project.customerId === userId || project.facilitatorId === userId
  );
};

// Function to get a project by ID
export const getProjectById = (projectId: number): Project | undefined => {
  return projects.find((project) => project.projectId === projectId);
};