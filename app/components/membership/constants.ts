export const dragOptions = [{
    name_prefix: [{
        id: 1,
        name: "Dr"
    },
    {
        id: 2,
        name: "Prof"
    },
    {
        id: 3,
        name: "Mr"
    },
    {
        id: 4,
        name: "Mrs"
    },
    {
        id: 4,
        name: "Ms"
    }
    ],
    gender: [
        {
            id: 1,
            name: "Male"
        },
        {
            id: 2,
            name: "Female"
        }
    ],
    category: [
        {
            id: 1,
            name: "Student"
        },
        {
            id: 2,
            name: "Faculty"
        },
        {
            id: 3,
            name: "Professional"
        },
        {
            id: 4,
            name: "Institution"
        }
    ],
    exp_area: [
        {
            id: 1,
            name: "VLSI Chip Design (Digital)"
        },
        {
            id: 2,
            name: "VLSI Chip Design (Analog)"
        },
        {
            id: 3,
            name: " Devices & Process"
        },
        {
            id: 4,
            name: "Semiconductor Manufacturing"
        },
        {
            id: 5,
            name: "Packaging"
        },
        {
            id: 6,
            name: "EDA"
        },
        {
            id: 7,
            name: "Others"
        }

    ],
    membership_fee: [
        {
            category: 'Student',
            price: 1500
        },
        {
            category: 'Faculty',
            price: 3000
        },
        {
            category: 'Professional',
            price: 6000
        },
        {
            category: 'Institution',
            price: 15000
        }
    ]

}]

export const form_fields = ["name_prefix", "first_name", "last_name", "gender", "category", "organization", "designation", "email", "phone", "exp_area"]