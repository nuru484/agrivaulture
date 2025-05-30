'use client';
import { FarmingTipForm } from '@/components/dashboard/farming-tips/farming-tip-form';

export default function CreateFarmingTipPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <FarmingTipForm mode="create" />
    </div>
  );
}