import React from 'react'
import PropTypes from 'prop-types'
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const alertConfig = {
  success: { icon: CheckCircle, colorClass: "text-green-500 bg-green-50 dark:bg-green-950" },
  error: { icon: XCircle, colorClass: "text-red-500 bg-red-50 dark:bg-red-950" },
  warning: { icon: AlertCircle, colorClass: "text-yellow-500 bg-yellow-50 dark:bg-yellow-950" },
  info: { icon: Info, colorClass: "text-blue-500 bg-blue-50 dark:bg-blue-950" },
}

export default function CustomAlertDemo({ type, title, message }) {
  const { icon: Icon, colorClass } = alertConfig[type]

  return (
    <Card className={`w-full max-w-md ${colorClass}`} role="alert">
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
        <Icon className="h-4 w-4" />
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{message}</CardDescription>
      </CardContent>
    </Card>
  )
}

CustomAlertDemo.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}