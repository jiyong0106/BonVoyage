import { StaticImageData } from 'next/image';
import { HTMLInputTypeAttribute, ReactNode } from 'react';

//타입 들어갈곳
export interface ButtonProps {
  name?: string;
  disabled?: boolean;
  type?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// 할 일 모달 Input props
export interface CreateDoItYourselfProps {
  title: string;
  content?: string;
  className?: string;
  icon?: ReactNode;
  name?: string;
  required?: boolean;
  isVertical?: boolean;
  isSpecialInput?: boolean; // 특수한 input이 필요한 경우 사용
  type?: HTMLInputTypeAttribute | 'textarea';
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

// 담당자 드롭다운 멤버 프로필
export interface MemberProfile {
  nickname: string;
  imageUrl: string;
}

export interface MyDashboardProps extends ButtonProps {
  src: JSX.Element;
  src2?: StaticImageData;
  iconAlt?: string;
}

export interface IconProps {
  color?: string;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDashboard {
  title: string;
  color: string;
}

export interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

<<<<<<< HEAD
export interface UserChangePasswordProps{
=======
// 초대된 대시보드
export interface Invitation {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ChangePasswordProps {
>>>>>>> 26bc8ddae10ec71afe9c9379b1dfb6b177d80423
  password: string;
  newPassword: string;
}

export interface UserChangeAccountProps{
  nickname: string ;
  profileImageUrl: string;
}

<<<<<<< HEAD
export interface passwordFromProps {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}
=======
>>>>>>> 26bc8ddae10ec71afe9c9379b1dfb6b177d80423
