import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/ui/app-text";
import { calendar, colors, radius, spacing } from "@/constants/theme";
import type { CalendarCell } from "@/types/calendar";
import { splitIntoWeeks } from "@/utils/calendar";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

type MonthCalendarProps = {
  cells: CalendarCell[];
};

export function MonthCalendar({ cells }: MonthCalendarProps) {
  const weeks = splitIntoWeeks(cells);

  return (
    <View style={styles.calendar}>
      {/* 요일 줄 */}
      <View style={styles.row}>
        {WEEKDAYS.map((name, i) => (
          <AppText
            key={name}
            variant="label"
            color={i === 0 ? colors.sunday : colors.textTertiary}
            style={styles.weekday}
          >
            {name}
          </AppText>
        ))}
      </View>

      {/* 날짜 줄 */}
      {weeks.map((week, w) => (
        <View key={w} style={styles.row}>
          {week.map((cell, i) => (
            <View key={i} style={[styles.cell, cell?.isToday && styles.today]}>
              {cell && <AppText variant="calendarDay">{cell.day}</AppText>}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: { gap: spacing.xxs },
  row: { flexDirection: "row", gap: spacing.xxs },
  weekday: { flex: 1, textAlign: "center", paddingBottom: spacing.xs },
  cell: {
    flex: 1,
    height: calendar.cellHeight,
    paddingTop: calendar.cellPaddingTop,
    alignItems: "center",
    borderRadius: radius.sm,
  },
  today: { backgroundColor: colors.pinkSoft },
});
