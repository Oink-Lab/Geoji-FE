import Svg, { Path } from "react-native-svg";

// 모든 탭 아이콘이 같이 쓰는 props 타입
type IconProps = {
  color: string;   // 선 색 (선택 여부에 따라 밖에서 정해줌)
  size?: number;   // ?는 "안 줘도 됨"이라는 뜻
};

export function HomeIcon({ color, size = 24 }: IconProps) {
  // size = 24: 크기를 안 주면 24로 그림 (기본값)
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.5 10.8L12 3.59998L20.5 10.8M5.8 9.59998V20H10M10 20H14M10 20V15H14V20M14 20H18.2V9.59998"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}



export function ChallengeIcon({ color, size = 24 }: IconProps) {
  // size = 24: 크기를 안 주면 24로 그림 (기본값)
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 21V11.2M6 11.2V4H17L14.8 7.6L17 11.2H6Z"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


export function AnalysisIcon({ color, size = 24 }: IconProps) {
  // size = 24: 크기를 안 주면 24로 그림 (기본값)
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 20V11M9.4 20V5M14.8 20V13.6M20.2 20V8.4"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SettingsIcon({ color, size = 24 }: IconProps) {
  // size = 24: 크기를 안 주면 24로 그림 (기본값)
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 15.2C12.8487 15.2 13.6626 14.8628 14.2627 14.2627C14.8629 13.6626 15.2 12.8487 15.2 12C15.2 11.1513 14.8629 10.3374 14.2627 9.73723C13.6626 9.13712 12.8487 8.79998 12 8.79998C11.1513 8.79998 10.3374 9.13712 9.73725 9.73723C9.13714 10.3374 8.79999 11.1513 8.79999 12C8.79999 12.8487 9.13714 13.6626 9.73725 14.2627C10.3374 14.8628 11.1513 15.2 12 15.2ZM19.6 13.9L21.3 15.2L19.5 18.3L17.5 17.5C16.9232 17.9567 16.2832 18.3272 15.6 18.6L15.3 20.7H11.7L11.4 18.6C10.7168 18.3272 10.0767 17.9567 9.49999 17.5L7.49999 18.3L5.69999 15.2L7.39999 13.9C7.29469 13.1704 7.29469 12.4295 7.39999 11.7L4.39999 10.1L6.19999 6.99998L8.19999 7.79998C8.77675 7.34328 9.41676 6.97275 10.1 6.69998L10.4 4.59998H14L14.3 6.69998C15 6.99998 15.6 7.29998 16.2 7.79998L18.2 6.99998L20 10.1L18.3 11.4C18.4 12.1 18.4 12.9 18.3 13.6L19.6 13.9Z"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
