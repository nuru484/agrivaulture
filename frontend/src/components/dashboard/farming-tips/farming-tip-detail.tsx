'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Crop, MapPin, FileText ,Edit,Trash2} from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { IFarmingTip } from '@/types/farming-tips/farming-tip';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface IFarmingTipDetailProps {
  tip: IFarmingTip;
}

export function FarmingTipDetail({ tip }: IFarmingTipDetailProps) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const isAdmin = user?.role === 'ADMIN';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return format(date, 'EEEE, MMMM dd, yyyy');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push('/dashboard/crop-cycle/farming-tips')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {isAdmin && (
          <div className="flex gap-2 ml-auto">
            <Button
              variant="outline"
              disabled // Placeholder for your implementation
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              disabled // Placeholder for your implementation
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{tip.tip}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-muted-foreground">{formatDate(tip.date)}</p>
                </div>
              </div>

              {tip.crop && (
                <div className="flex items-start gap-3">
                  <Crop className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Crop</p>
                    <p className="text-muted-foreground">{tip.crop}</p>
                  </div>
                </div>
              )}

              {tip.region && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Region</p>
                    <p className="text-muted-foreground">{tip.region}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>Created: {format(new Date(tip.createdAt), 'MMM dd, yyyy')}</p>
                <p>Updated: {format(new Date(tip.updatedAt), 'MMM dd, yyyy')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <p className="font-medium">Tip Details</p>
            </div>
            <Card>
              <CardContent className="pt-4">
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {tip.tip}
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}