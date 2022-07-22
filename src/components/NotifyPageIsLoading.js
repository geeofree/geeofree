import React from 'react'
import { useGatsbyRoute } from '~/hooks'
import Notify from './Notify'

function NotifyPageIsLoading() {
	const gatsbyRoute = useGatsbyRoute()

	if (!gatsbyRoute.updating) return null

	return <Notify>Loading</Notify>
}

export default NotifyPageIsLoading
