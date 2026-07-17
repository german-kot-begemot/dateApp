// import { Palette } from 'lucide-react';
// import { useTheme } from 'next-themes';

// const themes = [
//   { value: 'floral', label: 'Floral' },
//   { value: 'dark', label: 'Dark' },
//   { value: 'green', label: 'Green' },
//   { value: 'cat', label: 'Cat' },
//   { value: 'panda', label: 'Panda' },
//   { value: 'light', label: 'Light' },
// ] as const;

// export const ThemeSwitcher = () => {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-accent outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0">
//           <Palette size={16} />
//         </button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent
//         align="end"
//         className="w-full translate-y-1 transition-all duration-[2s]"
//       >
//         {themes.map((t) => (
//           <DropdownMenuItem
//             key={t.value}
//             onClick={() => setTheme(t.value)}
//             className="cursor-pointer w-full transition-colors duration-300 ease-in-out hover:bg-[#44CCAA]/10"
//           >
//             {t.label}
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };
