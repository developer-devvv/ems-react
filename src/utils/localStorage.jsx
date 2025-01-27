const employees = [
    {
        "id": 1,
        "firstname": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve the issue causing login failures for specific users.",
                "taskDate": "2025-01-10",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Homepage Redesign",
                "taskDescription": "Create a new layout for the homepage to improve user experience.",
                "taskDate": "2025-01-12",
                "category": "Design",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Unit Testing Module",
                "taskDescription": "Write and execute unit tests for the payment gateway module.",
                "taskDate": "2025-01-15",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Competitor Analysis",
                "taskDescription": "Research and document the features of competitor applications.",
                "taskDate": "2025-01-18",
                "category": "Research",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 0,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstname": "Vivaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Technical Manual Update",
                "taskDescription": "Update the technical manual for the new software release.",
                "taskDate": "2025-01-20",
                "category": "Documentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 0,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstname": "Aditya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "API Integration",
                "taskDescription": "Integrate the new API for user authentication.",
                "taskDate": "2025-01-25",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "UI Enhancements",
                "taskDescription": "Add animations to improve the visual appeal of the dashboard.",
                "taskDate": "2025-01-28",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstname": "Arjun",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Data Collection",
                "taskDescription": "Gather data for the upcoming market trends report.",
                "taskDate": "2025-01-30",
                "category": "Research",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Bug Fix in Test Suite",
                "taskDescription": "Identify and resolve issues in the test suite for better coverage.",
                "taskDate": "2025-01-31",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    }
];

  

const admin = [
  {
      "id": 1,
      "firstname": "Admin",
      "email": "admin@example.com",
      "password": "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))

  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))

  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}