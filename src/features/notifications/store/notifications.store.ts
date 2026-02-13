import { create } from 'zustand';
import type { Notification } from '../types/notifications.types';

interface NotificationsState {
    notifications: Notification[];
    unreadCount: number;

    // Actions
    addNotification: (notification: Notification) => void;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
    removeNotification: (id: string) => void;
    clearAll: () => void;
}

const MOCK_NOTIFICATIONS: Notification[] = [
    {
        id: '1',
        title: 'New User Registered',
        description: 'A new user "John Doe" has joined the platform and is awaiting verification.',
        type: 'info',
        from: { name: 'System', isSystem: true },
        isRead: false,
        createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 mins ago
    },
    {
        id: '2',
        title: 'Production Alert',
        description: 'Line 4 in Factory A reported a temperature threshold violation.',
        type: 'warning',
        from: { name: 'IoT Monitor' },
        isRead: false,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    },
    {
        id: '3',
        title: 'Update Successful',
        description: 'Your profile information has been updated successfully.',
        type: 'success',
        from: { name: 'Security' },
        isRead: true,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    },
];

export const useNotificationStore = create<NotificationsState>((set) => ({
    notifications: MOCK_NOTIFICATIONS,
    unreadCount: MOCK_NOTIFICATIONS.filter((n) => !n.isRead).length,

    addNotification: (notification) =>
        set((state) => {
            const newNotifications = [notification, ...state.notifications];
            return {
                notifications: newNotifications,
                unreadCount: newNotifications.filter((n) => !n.isRead).length,
            };
        }),

    markAsRead: (id) =>
        set((state) => {
            const newNotifications = state.notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n));
            return {
                notifications: newNotifications,
                unreadCount: newNotifications.filter((n) => !n.isRead).length,
            };
        }),

    markAllAsRead: () =>
        set((state) => {
            const newNotifications = state.notifications.map((n) => ({ ...n, isRead: true }));
            return {
                notifications: newNotifications,
                unreadCount: 0,
            };
        }),

    removeNotification: (id) =>
        set((state) => {
            const newNotifications = state.notifications.filter((n) => n.id !== id);
            return {
                notifications: newNotifications,
                unreadCount: newNotifications.filter((n) => !n.isRead).length,
            };
        }),

    clearAll: () => set({ notifications: [], unreadCount: 0 }),
}));

export const useNotifications = () => {
    const store = useNotificationStore();
    return {
        notifications: store.notifications,
        unreadCount: store.unreadCount,
        markAsRead: store.markAsRead,
        markAllAsRead: store.markAllAsRead,
        removeNotification: store.removeNotification,
        clearAll: store.clearAll,
    };
};
