const API_URL = 'https://api.globalgiving.org/api/public/';

const globalGivingAPI = {
    async fetchAllOrgProjects() {
        try {
            const response = await fetch(`${API_URL}projectservice/all/projects/active/download.xml?api_key=YOUR_API_KEY`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw error;
        }
    },
    async fetchAllOrganizations() {
        try {
            const response = await fetch(`${API_URL}orgservice/all/organizations/vetted/download?api_key=YOUR_API_KEY`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching organizations:', error);
            throw error;
        }
    }

    // Add more API methods as needed
};

export default globalGivingAPI;