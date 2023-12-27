import { forwardRef, RefObject, useState } from "react";
import Link from "next/link";
import { Menu } from "./Menu";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  ChevronDown,
  ChevronRight,
  UserPlus2,
  Database,
  LayoutDashboard,
  CalendarRangeIcon,
  Settings2Icon,
  LayoutList,
  Frame,
  Layers,
  UserCheck,
  QrCode,
  Contact2,
} from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

interface SidebarProps {
  showNav: boolean;
  currentPath: string;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ currentPath, showNav }: SidebarProps, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div ref={ref} className="fixed w-60 h-full bg-slate-300 shadow-sm">
        <div className="flex justify-center">
          <picture>
            <img
              className="w-32 h-auto mr-12"
              src="/nartec-logo.png"
              alt="company logo"
            />
          </picture>
        </div>

        <div className="flex flex-col pl-1 m-2">
          <Link href="/dashboard">
            <div
              className={`rounded text-center cursor-pointer flex items-center bg-slate-500 transition-colors ${
                currentPath === "/"
                  ? "bg-orange-100 text-orange-500"
                  : "text-white hover:bg-orange-100 hover:text-nartecPrimary"
              }`}
            >
              <div className="flex m-3">
                <LayoutDashboard className="h-5 w-5 text-neutral-300" />
                <div className="pl-2">Dashboard</div>
              </div>
            </div>
          </Link>
          <aside className="w-59 mt-1 max-h-[680px] scroll-smooth hover:scroll-auto h-screen overflow-hidden overflow-y-auto overscroll-behavior-y: auto group">
            <Link href="/dashboard/profile">
              <Button variant="outline" className="w-56">
                <User className="h-4 w-4" />
                <span className="mr-auto pl-1">Profile</span>
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-56">
                <Button variant="outline">
                  <Database className="h-4 w-4 mr-1" />
                  <span>Master Data</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 max-h-[600px] scroll-smooth scroll-margin-inline-end: 2px hover:scroll-auto h-screen overflow-hidden overflow-y-auto overscroll-behavior-y: auto group">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <LayoutList className="mr-1 h-4 w-4" />
                    <span>GPC</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Layers className="mr-2 h-4 w-4" />
                        <span>Segments</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Layers className="mr-2 h-4 w-4" />
                        <span>Family</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Layers className="mr-2 h-4 w-4" />
                        <span>Class</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Layers className="mr-2 h-4 w-4" />
                        <span>Bricks</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Layers className="mr-2 h-4 w-4" />
                        <span>Attributes</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Layers className="mr-2 h-4 w-4" />
                        <span>Attribute Value</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <Link href="/dashboard/cr">
                      <DropdownMenuItem>
                        <LayoutList className="mr-2 h-4 w-4" />
                        <span>CR Number List</span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <Link href="/dashboard/users">
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Users</span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <Link href="/dashboard/roles">
                      <DropdownMenuItem>
                        <UserCheck className="mr-2 h-4 w-4" />
                        <span>Roles</span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <Link href="/dashboard/brands">
                      <DropdownMenuItem>
                        <QrCode className="mr-2 h-4 w-4" />
                        <span>Brands</span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                  <DropdownMenuSeparator />

                  <div className="mt-1">
                    <Link href="/dashboard/member-products">
                      <DropdownMenuItem>
                        <QrCode className="mr-2 h-4 w-4" />
                        <span>Member Products</span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <Link href="/dashboard/all-products">
                      <DropdownMenuItem>
                        <QrCode className="mr-2 h-4 w-4" />
                        <span>All Products</span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <Link href="/dashboard/foreign-gtin">
                      <DropdownMenuItem>
                        <QrCode className="mr-2 h-4 w-4" />
                        <span>Foreign</span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Units</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Product Type</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Product Packaging</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>License Registry</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Country</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>State</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>City</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Documents</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Member Category</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Other Product</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Admin Activity</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>Members Activity</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>GCP Types</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="mt-1">
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>fasfasdfasd</span>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/dashboard/member-category">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member Category</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">Member GLN</span>
              </Button>
            </Link>
            <Link href="/dashboard/member-gln">
              <Button variant="outline" className="w-56">
                <Contact2 className="h-4 w-4" />
                <span className="mr-auto pl-1">faeafasdfadsfasdfads</span>
              </Button>
            </Link>
          </aside>
          <Button variant="outline" className="w-54 m-2 bg-slate-500">
            <LogOut className="h-4 w-4" />
            <span className="">Logout</span>
          </Button>
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;

{
  /* <div className="mt-1">
  <Button variant="outline" className="w-56">
    <LogOut className="h-4 w-4" />
    <span className="mr-auto pl-1">Logout</span>
  </Button>
</div> */
}
