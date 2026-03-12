'use client';

import KanbanBoard from '@/components/admin/KanbanBoard';

export default function CRMPage() {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold">CRM Pipeline</h1>
                <p className="text-gray-400 text-sm mt-1">Manage your leads and sales pipeline</p>
            </div>
            <KanbanBoard />
        </div>
    );
}
