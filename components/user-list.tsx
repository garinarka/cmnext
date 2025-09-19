"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type User = {
    id: string;
    name: string | null;
    email: string;
    createdAt: string;
};

export function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        setLoading(true);
        const res = await fetch("/api/users");
        if (res.ok) {
            const data = await res.json();
            setUsers(data);
        }
        setLoading(false);
    };

    const deleteUser = async (id: string) => {
        if (!confirm("Yakin hapus user ini?")) return;
        await fetch(`/api/users/${id}`, { method: "DELETE" });
        fetchUsers();
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="space-y-4">
            {users.length === 0 && <p>No users found.</p>}

            {users.map((user) => (
                <Card key={user.id}>
                    <CardHeader>
                        <CardTitle>{user.name || "No Name"}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            <p className="text-xs text-gray-500">
                                Created: {new Date(user.createdAt).toLocaleString()}
                            </p>
                        </div>
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteUser(user.id)}
                        >
                            Delete
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
