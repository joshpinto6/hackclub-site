import { useState, useEffect } from 'react'

export default function useOrganizationI18n() {
  const [org, setOrg] = useState('Organization')

  useEffect(() => {
    if (navigator.language === 'en-GB') setOrg('Organisation')
  }, [])

  return org
}