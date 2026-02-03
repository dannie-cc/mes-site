import { Menu, Bell, Search, User } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu';
import { useAuth } from '@/features/auth/store/auth.store';

interface DashboardHeaderProps {
    onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <header className="sticky top-0 z-40 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
            <div className="flex h-16 items-center gap-4 px-6">
                {/* Menu Toggle */}
                <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden text-slate-400 hover:text-white">
                    <Menu className="h-5 w-5" />
                </Button>

                {/* Search */}
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search..." className="pl-9 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500" />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-500 rounded-full" />
                    </Button>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                    <User className="h-4 w-4 text-white" />
                                </div>
                                <span className="hidden md:block">{user?.firstName || 'User'}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700">
                            <DropdownMenuLabel className="text-slate-300">
                                <div className="flex flex-col">
                                    <span>
                                        {user?.firstName} {user?.lastName}
                                    </span>
                                    <span className="text-xs text-slate-500 font-normal">{user?.email}</span>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-slate-700" />
                            <DropdownMenuItem className="text-slate-300 focus:text-white focus:bg-slate-700 cursor-pointer">Profile</DropdownMenuItem>
                            <DropdownMenuItem className="text-slate-300 focus:text-white focus:bg-slate-700 cursor-pointer">Settings</DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-slate-700" />
                            <DropdownMenuItem onClick={handleLogout} className="text-red-400 focus:text-red-300 focus:bg-slate-700 cursor-pointer">
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
