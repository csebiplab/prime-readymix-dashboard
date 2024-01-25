import DashboardHeader from "@/components/dashboard-header";
import DashboardShell from "@/components/shell";
import { totalMembersData } from "@/lib/data";
import getCurrentUser from "@/lib/session";
import {
  Card,
  Text,
  Metric,
  BadgeDelta,
  Flex,
  Title,
  AreaChart,
} from "@tremor/react";

export default async function Home() {
  return (
    <>
      <div className="flex lg:flex-row gap-4 flex-col px-5">
        <Card className="rounded-lg">
          <Flex justifyContent="between" alignItems="center">
            <Text>Total members</Text>
            <BadgeDelta
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size="sm"
            >
              +20%
            </BadgeDelta>
          </Flex>
          <Metric>1918wwww</Metric>
        </Card>
        <Card className="rounded-lg">
          <Flex justifyContent="between" alignItems="center">
            <Text>Enrolled members</Text>
            <BadgeDelta
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size="sm"
            >
              +10%
            </BadgeDelta>
          </Flex>
          <Metric>1736</Metric>
        </Card>
        <Card className="rounded-lg">
          <Flex justifyContent="between" alignItems="center">
            <Text>Active now</Text>
            <BadgeDelta
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size="sm"
            >
              +19%
            </BadgeDelta>
          </Flex>
          <Metric>132</Metric>
        </Card>
      </div>
      <div className="px-5">
        <Card className="rounded-lg ">
          <Title>Course Members</Title>
          <AreaChart
            className="rounded-md"
            data={totalMembersData}
            index="date"
            categories={["Total members"]}
          />
        </Card>
      </div>
      {/* <DashboardShell>
      <DashboardHeader title="Home" />
    
    </DashboardShell> */}
    </>
  );
}
