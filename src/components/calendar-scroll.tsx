"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const DAYS_RU = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const MONTHS_RU = [
  "ЯНВАРЬ",
  "ФЕВРАЛЬ",
  "МАРТ",
  "АПРЕЛЬ",
  "МАЙ",
  "ИЮНЬ",
  "ИЮЛЬ",
  "АВГУСТ",
  "СЕНТЯБРЬ",
  "ОКТЯБРЬ",
  "НОЯБРЬ",
  "ДЕКАБРЬ",
];

export default function CalendarScroll() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const scrollRef = useRef<HTMLDivElement>(null);

  const generateDates = (startDate: Date) => {
    const dates = [];
    const start = new Date(startDate);
    start.setDate(start.getDate() - 15); // Start 15 days before
    for (let i = 0; i < 45; i++) {
      // Generate 45 days
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates(currentDate);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollToMiddle =
        scrollRef.current.scrollWidth / 2 - scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollLeft = scrollToMiddle;
    }
  }, []);

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isWeekend = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const getMonthSection = (date: Date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}`;
  };

  return (
    <div className="w-full mx-auto p-4">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex" ref={scrollRef}>
          {dates.reduce((acc: JSX.Element[], date, index, array) => {
            const monthSection = getMonthSection(date);
            if (
              index === 0 ||
              monthSection !== getMonthSection(array[index - 1])
            ) {
              acc.push(
                <div
                  key={`month-${monthSection}`}
                  className={`sticky left-0 z-10 bg-background py-2 text-sm text-muted-foreground rotate-90 w-[10px]`}
                >
                  {MONTHS_RU[date.getMonth()].slice(0, 3)}
                </div>
              );
            }
            acc.push(
              <div
                key={index}
                className={`flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center border-r last:border-r-0 cursor-pointer ${
                  selectedDate.getTime() === date.getTime()
                    ? "bg-primary text-primary-foreground"
                    : isToday(date)
                    ? "bg-secondary text-secondary-foreground"
                    : isWeekend(date)
                    ? "text-destructive"
                    : ""
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="text-lg font-bold">{date.getDate()}</div>
                <div className="text-xs">{DAYS_RU[date.getDay()]}</div>
              </div>
            );
            return acc;
          }, [])}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}
