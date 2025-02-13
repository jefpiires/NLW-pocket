import { CreateGoal } from './components/create-goal'
import { EmpityGoals } from './components/empity-goals'
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmpityGoals />}

      <CreateGoal />
    </Dialog>
  )
}
