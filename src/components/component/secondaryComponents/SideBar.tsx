import { Button } from '@/components/ui/button'
import { Code, CommandIcon, Folder, HelpCircle, PenTool, Plus, PlusSquare, UserPlus } from 'lucide-react'
import React from 'react'
import { FaCaretUp } from 'react-icons/fa'
import { GrAnnounce } from 'react-icons/gr'
import SettingsIcon from './SettingsIcon'
import { Badge } from "@/components/ui/badge";

const SideBar = () => {
  return (
    <div className="w-60 bg-white p-3 rounded-3xl">
          <div className="mb-4">
            <div className="flex items-center justify-between pb-5">
            <CommandIcon />
              <div >
                <p className="text-slate-400">NIC</p>
              <h2 className="text-lg font-semibold">InnovateHub</h2>


              </div>
              <SettingsIcon className="text-gray-400" />
            </div>
            <div className="mt-2 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium flex gap-2"><PenTool width={20} height={20} />Design team</span>
                <Badge variant="secondary">
                  <CommandIcon width={12} height={12} />
                  +1
                </Badge>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-medium flex gap-2"><GrAnnounce width={20} height={20} />Marketing Team</span>
                <Badge variant="secondary">
                  <CommandIcon width={12} height={12} />
                  +2
                </Badge>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-medium flex gap-2"><Code width={20} height={20} />Development Team</span>
                <Badge variant="secondary">
                  <CommandIcon width={12} height={12} />
                  +3
                </Badge>
              </div>
              <Button className="mt-2" variant="ghost">
              <PlusSquare className="text-slate-600" /> Create a team
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center">
          <Button className="text-slate-500" variant="ghost">
            FOLDERS
              </Button>
              <Plus className=" text-slate-500" width={15} height={15} />
          </div>
        

          <div className="flex flex-col space-y-1">
          <div className="flex justify-between items-center">
          <Button  variant="ghost" className="flex gap-1">
          <Folder width={15} height={15} />
            Products
              </Button>
              <FaCaretUp  width={15} height={15} />
          </div>
            
          <div>
            
          <Button className="justify-start text-left" variant="ghost">
              Roadmap
            </Button>
          </div>
            <Button className="justify-start text-left" variant="ghost">
              Feedback
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Performance
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Team
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Analytics
            </Button>
            <Button className="mt-2" variant="ghost">
              Add new sub
            </Button>
          </div>
          <div className="flex flex-col space-y-1 mt-4">
          <div className="flex justify-between items-center">
          <Button  variant="ghost" className="flex gap-1">
          <Folder width={15} height={15} />
            Sales
              </Button>
              <FaCaretUp  width={15} height={15} />
          </div>
          <div className="flex justify-between items-center">
          <Button  variant="ghost" className="flex gap-1">
          <Folder width={15} height={15} />
            Design
              </Button>
              <FaCaretUp  width={15} height={15} />
          </div>
          <div className="flex justify-between items-center">
          <Button  variant="ghost" className="flex gap-1">
          <Folder width={15} height={15} />
            Office
              </Button>
          </div>
           <div className="flex justify-between items-center">
          <Button  variant="ghost" className="flex gap-1">
          <Folder width={15} height={15} />
            Legal
              </Button>
          </div>
          </div>
          <div className="mt-10">
            <Button variant="ghost" className='flex gap-1'> <UserPlus width={15} height={15} />Invite teammates</Button>
            <Button className="mt-2 flex gap-1" variant="ghost">
            <HelpCircle width={15} height={15} />

              Help and first steps
            </Button>
            <div className='flex items-center justify-between mt-2 bg-gray-400 rounded-xl  p-2'>
              <p className='text-[10px] text-center'>7 days left on Trial</p>
            <Button className=" bg-black text-white rounded-lg w-20" size="sm">
              Add billing
            </Button>
            </div>
          </div>
        </div>
  )
}

export default SideBar