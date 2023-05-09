import SidebarNavLink, { SidebarNavLinkProps } from './sidebar-nav-link'
import { NavigationPath } from '../../models/routes'

const navItems: SidebarNavLinkProps[] = [
  {
    name: 'Home',
    href: NavigationPath.Home,
    iconClassName: 'bi bi-display',
    title: '',
    isActive: false,
  },
  {
    name: 'Products',
    href: NavigationPath.Products,
    iconClassName: 'bi bi-building',
    title: '',
    isActive: false,
  },
  {
    name: 'Orders',
    href: NavigationPath.Orders,
    iconClassName: 'bi bi-files',
    title: '',
    isActive: false,
  },
  {
    name: 'Invoices',
    href: NavigationPath.Invoices,
    iconClassName: 'bi bi-receipt',
    title: '',
    isActive: false,
  },
  {
    name: 'Results',
    href: NavigationPath.Results,
    iconClassName: 'bi bi-bar-chart',
    title: '',
    isActive: false,
  },
  {
    name: 'Customers',

    href: NavigationPath.Customers,
    iconClassName: 'bi bi-people',
    title: '',
    isActive: false,
  },
]

function SidebarNav() {
  return (
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      {navItems.map((navItem) => (
        <SidebarNavLink
          key={navItem.name}
          title={navItem.title}
          href={`#${navItem.href}`}
          iconClassName={navItem.iconClassName}
          name={navItem.name}
          isActive={navItem.isActive}
        />
      ))}
    </ul>
  )
}

export default SidebarNav
