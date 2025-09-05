'use client';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Download,
  Share2,
  Mail,
  FileText,
  FileImage,
  User,
} from 'lucide-react';

interface ControlPanelProps {
  designation: string;
  setDesignation: Dispatch<SetStateAction<string>>;
  teacherName: string | null;
  setTeacherName: Dispatch<SetStateAction<string | null>>;
  handleTeacherImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDownload: (format: 'png' | 'pdf') => void;
  handleShare: (platform: 'whatsapp' | 'email') => void;
}

export function ControlPanel({
  designation,
  setDesignation,
  teacherName,
  setTeacherName,
  handleTeacherImageUpload,
  handleDownload,
  handleShare,
}: ControlPanelProps) {
  return (
    <Card className="bg-card/80 border-border/50 sticky top-8">
      <CardHeader>
        <CardTitle className="font-headline text-accent">Customize Your Card</CardTitle>
        <CardDescription>Personalize every detail to make it perfect.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['item-1', 'item-4']} className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-headline">Card Content</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Select value={designation} onValueChange={setDesignation}>
                  <SelectTrigger id="designation">
                    <SelectValue placeholder="Select a designation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="HOD">HOD</SelectItem>
                    <SelectItem value="Asst. Prof.">Asst. Prof.</SelectItem>
                    <SelectItem value="Prof.">Prof.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div className="space-y-2">
                <Label htmlFor="teacher-name">Teacher's Name</Label>
                <Input
                  id="teacher-name"
                  value={teacherName || ''}
                  onChange={(e) => setTeacherName(e.target.value)}
                  placeholder="e.g., Mr. Smith"
                />
              </div>
               <div>
                <Label htmlFor="teacher-image-upload" className="mb-2 block">
                  Upload Teacher's Image
                </Label>
                <Button asChild variant="outline" className="w-full">
                  <label htmlFor="teacher-image-upload" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Choose teacher's photo
                    <input
                      id="teacher-image-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleTeacherImageUpload}
                    />
                  </label>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-headline">Export & Share</AccordionTrigger>
            <AccordionContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" onClick={() => handleDownload('png')}>
                        <FileImage className="mr-2 h-4 w-4" />
                        PNG
                    </Button>
                     <Button variant="outline" onClick={() => handleDownload('pdf')}>
                        <FileText className="mr-2 h-4 w-4" />
                        PDF
                    </Button>
                </div>
                 <div className="grid grid-cols-2 gap-2">
                     <Button variant="outline" onClick={() => handleShare('whatsapp')}>
                        <Share2 className="mr-2 h-4 w-4" />
                        WhatsApp
                    </Button>
                     <Button variant="outline" onClick={() => handleShare('email')}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                    </Button>
                </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </CardContent>
    </Card>
  );
}
