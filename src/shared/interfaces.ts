export interface Task {
  id: string
  title: string
  isCompleted: boolean
  isActive: boolean
  timestamp: number
}
export interface State {
  job: Task
  jobs: Task[]
  filter: string
  isLoading: boolean
}
export interface FormValues {
  datetime: string
  title: string
}
export interface EditJobProps {
  job: Task
}
export interface JobItemProps {
  job: Task
  index: number
}
export interface CountdownProps {
  timestamp: number
  title: string
  isCompleted: boolean
}
export interface JobTitleProps {
  title: string
}
export interface ProviderProps {
  children: React.ReactNode
}
export interface CustomModalProps {
  isOpen: boolean
  onRequestClose: () => void
  contentLabel: string
  messege: JSX.Element
}
export interface Time {
  day: number
  hour: number
  minute: number
  second: number
}
