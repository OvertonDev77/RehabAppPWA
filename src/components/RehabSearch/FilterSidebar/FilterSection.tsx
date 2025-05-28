import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterSectionProps {
  title: string;
  options: { id: string; label: string }[];
  selectedOptions: string[];
  onChange: (id: string, checked: boolean) => void;
}

export function FilterSection({
  title,
  options,
  selectedOptions,
  onChange,
}: FilterSectionProps) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={option.id}
              checked={selectedOptions.includes(option.id)}
              onCheckedChange={(checked) =>
                onChange(option.id, checked as boolean)
              }
            />
            <Label
              htmlFor={option.id}
              className="text-sm font-normal cursor-pointer"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
