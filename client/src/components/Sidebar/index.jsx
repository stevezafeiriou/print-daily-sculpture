import React, { useState } from "react";
import {
	SidebarWrapper,
	NavItem,
	ToggleButton,
	NavList,
	PageWrapper,
	ContentWrapper,
	InnerContent,
	IconLabel,
	Overlay,
	StyledNavLink,
	LogoImage,
} from "./SidebarElements";
import { FileText, Settings, Menu } from "lucide-react";
import logo from "../../assets/logo.jpg";

export default function SidebarLayout({ children }) {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);
	const closeSidebar = () => setOpen(false);

	return (
		<PageWrapper>
			<ToggleButton onClick={handleToggle}>
				<Menu size={24} />
			</ToggleButton>

			<SidebarWrapper open={open}>
				<NavList>
					<NavItem>
						<LogoImage src={logo} />
					</NavItem>
					<NavItem>
						<StyledNavLink to="/" onClick={closeSidebar}>
							<IconLabel>
								<FileText size={18} />
								Dashboard
							</IconLabel>
						</StyledNavLink>
					</NavItem>
					<NavItem>
						<StyledNavLink to="/settings" onClick={closeSidebar}>
							<IconLabel>
								<Settings size={18} />
								Settings
							</IconLabel>
						</StyledNavLink>
					</NavItem>
				</NavList>
			</SidebarWrapper>

			{open && <Overlay onClick={closeSidebar} />}

			<ContentWrapper>
				<InnerContent>{children}</InnerContent>
			</ContentWrapper>
		</PageWrapper>
	);
}
