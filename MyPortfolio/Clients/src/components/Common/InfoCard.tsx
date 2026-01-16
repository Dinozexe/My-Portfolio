type InfoCardProps = {
  title: string
  description?: string
  children?: React.ReactNode
}

const InfoCard = ({ title, description, children }: InfoCardProps) => {
  return (
    <div className="
      p-4 rounded-xl
      border border-gray-200 dark:border-gray-700
      bg-gray-50 dark:bg-gray-900/40
      space-y-2
      transition
    ">
      <h3 className="font-semibold text-sm">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}

      {children}
    </div>
  )
}

export default InfoCard
