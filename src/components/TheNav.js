import { HomeIcon, MagnifyingGlassIcon, BookOpenIcon, PlusCircleIcon, HeartIcon, } from '@heroicons/react/24/outline'
import NavItem from './NavItem';

const activeNavItemClasses = 'flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded';
const navItemClasses = 'flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300';

const navItems = [
    {
        label: 'Home',
        classes: activeNavItemClasses,
        icon: <HomeIcon className="h-p w-6" />,
    },
    {
        label: 'Search',
        classes: navItemClasses,
        icon: <MagnifyingGlassIcon className="h-p w-6" />,
    },
    {
        label: 'Your Library',
        classes: `${navItemClasses} mb-6`,
        icon: <BookOpenIcon className="h-p w-6" />,
    },
    {
        label: 'Create Playlist',
        classes: navItemClasses,
        icon: <PlusCircleIcon className="h-p w-6" />,
    },
    {
        label: 'Liked Songs',
        classes: navItemClasses,
        icon: <HeartIcon className="h-p w-6" />,
    },
]

function TheNav() {
    return (
        <nav>
            {navItems.map(({ classes, icon, label }) => (
                <NavItem key={label} classes={classes} icon={icon}>
                    {label}
                </NavItem>
            ))}
        </nav>
    )
}

export default TheNav;