import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "./theme-toggle"

export function MenubarDemo() {
    return (
        <Menubar className="flex justify-end px-4 py-6">
            <ModeToggle />
        </Menubar>
    )
}
