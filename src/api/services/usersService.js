import axiosInstance from '../../api/axiosInstance';

export const login = async (userData) => {
    try {
        const users = await axiosInstance.post('/users/login', userData);
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const user = await axiosInstance.post('/users/register', userData);
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
export const forgotPassword = async (userData) => {
    try {
        const user = await axiosInstance.post('/users/forgot-password', userData);
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const resetPassword = async (userData) => {
    try {
        const user = await axiosInstance.post('/users/reset-password', userData);
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};