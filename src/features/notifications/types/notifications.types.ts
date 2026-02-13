export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface NotificationSender {
    name: string;
    avatar?: string;
    isSystem?: boolean;
}

export interface Notification {
    id: string;
    title: string;
    description: string;
    type: NotificationType;
    from: NotificationSender;
    isRead: boolean;
    createdAt: string;
    link?: string;
}
