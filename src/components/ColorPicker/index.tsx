import { HexColorPicker } from "react-colorful"
import useClickOutside from "./useClickOutside"
import { useCallback, useRef, useState } from "react"
import cls from "classnames";

export interface ColorPickerProps {
    color?: string;
    onChange: (color: string) => void;
    presetColors?: string[];
    className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, presetColors, className }) => {
  const popover = useRef<HTMLDivElement>(null);
  const [isOpen, toggle] = useState(false);
  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className={cls("picker", className)}>
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
          {
            presetColors && (
                <div className="picker__swatches">
                {presetColors.map((presetColor) => (
                  <button
                    key={presetColor}
                    className="picker__swatch"
                    style={{ backgroundColor: presetColor }}
                    onClick={() => onChange(presetColor)}
                  />
                ))}
              </div>
            )
          }
        </div>
      )}
    </div>
  )
}
export default ColorPicker
