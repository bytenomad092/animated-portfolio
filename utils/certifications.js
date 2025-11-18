import { openLink } from "./methods"

const certifications = {
    heading: `Certifications`,
    list: [
        {
            size: 2,
            title: 'Data Science Orientation',
            platform: 'IBM',
            link: 'https://www.credly.com/badges/de840b3e-276e-44c0-9fb3-b52fb5f01caf',
            date: 'Issued November 2025',
            logo: '/assets/certifications/data-science-orientation.png',
            aos: 'zoom-out-left',
        },
        {
            size: 1,
            title: 'Tools for Data Science',
            platform: 'IBM',
            link: 'https://www.credly.com/badges/38a4c169-870a-4b47-8299-412ed5ed7f3e',
            date: 'Issued November 2025',
            logo: '/assets/certifications/Tools_for_Data_Science_Foundational.png',
            aos: 'zoom-out-right',
        },
        {
            size: 1,
            title: 'Python for Data Science and AI',
            platform: 'IBM',
            link: 'https://www.credly.com/badges/12be5682-2ce8-4ed1-b433-1f01a5f820e1',
            date: 'Issued November 2025',
            logo: '/assets/certifications/Python_Data_Science_AI.png',
            aos: 'zoom-out-left',
        },
        {
            size: 1,
            title: 'Databases and SQL for Data Science',
            platform: 'IBM',
            link: 'https://www.credly.com/badges/f47dedbb-2675-40b8-8d20-63aadf5e254c',
            date: 'Issued November 2025',
            logo: '/assets/certifications/Databases_SQL_Data_Science.png',
            aos: 'zoom-out-right',
        },
        {
            size: 1,
            title: 'Data Analysis with Python',
            platform: 'IBM',
            link: 'https://www.credly.com/badges/3daa19e7-88ea-4d62-b526-7a81ab97b078',
            date: 'Issued November 2025',
            logo: '/assets/certifications/Data_Analysis_Python.png',
            aos: 'zoom-out-left',
        },
        {
            size: 1,
            title: 'Data Visualization with Python',
            platform: 'IBM',
            link: 'https://www.credly.com/badges/69ac8b1b-e70b-4c94-9ed0-cba48217d13f',
            date: 'Issued October 2018',
            logo: '/assets/certifications/Data_Visualization_Python.png',
            aos: 'zoom-out-right',
        }
    ],
    handleIconClick: openLink,
}

export default certifications
