export interface SidebarNavLinkProps {
  iconClassName: string
  href: string
  name: string
  title: string
  isActive: boolean
}

function SidebarNavLink({ iconClassName, href, name, title, isActive }: SidebarNavLinkProps) {
  return (
    <li className="nav-item">
      <a
        href={href}
        className={`nav-link py-3 border-bottom ${isActive ? 'active' : ''}`}
        aria-current="page"
        title={title}
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title={name}
      >
        <i className={iconClassName}></i>
      </a>
    </li>
  )
}

export default SidebarNavLink
