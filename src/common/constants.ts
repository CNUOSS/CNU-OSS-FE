import { AttributeType } from '@components/widgets/Table';
import {
  Temp,
  Trash,
  Number,
  NavItem,
  OSSListAttr,
  LicenseListAttr,
  ProjectListAttr,
  VersionListAttr,
  AddLectureSWListAttr,
  SubscribedSWListAttr,
  TotalLectureSWListAttr,
  LectureSWManagementListAttr,
} from '@@types/types';

export interface CategoryType {
  disable: boolean;
  title: string;
  items: NavItem[];
}

export const LIMIT = 9;

export const LANGUAGES = [
  { name: '한국어', lang: 'ko' },
  { name: 'English', lang: 'en' },
];

export const swCategory = (disable: boolean = false): CategoryType => ({
  disable,
  title: 'usingSW',
  items: [NavItem.TotalLectureSWList, NavItem.SubscribingSWList, NavItem.SWDashboard],
});

export const pjCategory = (disable: boolean = false): CategoryType => ({
  disable,
  title: 'project',
  items: [NavItem.PJList, NavItem.LicenseList],
});

export const mgCategory = (disable: boolean = false): CategoryType => ({
  disable,
  title: 'management',
  items: [NavItem.UserManagement, NavItem.SWManagement],
});

/**
 * List Attributes
 */
export const totalLectureSWListAttr: AttributeType<TotalLectureSWListAttr>[] = [
  { label: '년도', dataKey: 'year', widthPercent: 5, disableSort: true },
  { label: '학기', dataKey: 'semester', widthPercent: 8, disableSort: false },
  { label: '조직분류', dataKey: 'department', widthPercent: 8, disableSort: true },
  { label: '과목번호', dataKey: 'lectureNum', widthPercent: 11, disableSort: false },
  { label: '분반', dataKey: 'classNum', widthPercent: 4, disableSort: true },
  { label: '과목명', dataKey: 'lectureName', widthPercent: 10, disableSort: false },
  { label: '이수구분', dataKey: 'lectureType', widthPercent: 8, disableSort: true },
  { label: '등록자', dataKey: 'writer', widthPercent: 6, disableSort: true },
  { label: '제품명', dataKey: 'swName', widthPercent: 9, disableSort: false },
  { label: '제조사', dataKey: 'manufacturing', widthPercent: 6, disableSort: true },
  { label: '라이선스', dataKey: 'license', widthPercent: 9, disableSort: true },
  { label: 'SW관리대상', dataKey: 'managed', widthPercent: 14, disableSort: false },
];

export const addLectureSWListAttr: AttributeType<AddLectureSWListAttr | Trash | Number>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 10, disableSort: true },
  { label: '소프트웨어 제조사', dataKey: 'manufacturing', widthPercent: 20, disableSort: true },
  { label: '소프트웨어 제품명', dataKey: 'swName', widthPercent: 30, disableSort: true },
  { label: '라이선스', dataKey: 'license', widthPercent: 35, disableSort: true },
  { label: '', dataKey: 'trash', widthPercent: 5, disableSort: true },
];

export const lectureSWManagementListAttr: AttributeType<LectureSWManagementListAttr | Number>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 10, disableSort: true },
  { label: '제조사', dataKey: 'manufacturing', widthPercent: 18, disableSort: false },
  { label: '제품명', dataKey: 'swName', widthPercent: 18, disableSort: false },
  { label: '사용 개수', dataKey: 'usedCount', widthPercent: 18, disableSort: false },
  { label: '등록자', dataKey: 'writer', widthPercent: 18, disableSort: true },
  { label: '등록 날짜', dataKey: 'enrollDate', widthPercent: 18, disableSort: false },
];

export const subscibedSWListAttr: AttributeType<SubscribedSWListAttr | Number>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 2, disableSort: true },
  { label: '제품군', dataKey: 'type', widthPercent: 10, disableSort: false },
  { label: '제조사', dataKey: 'manufacturing', widthPercent: 10, disableSort: false },
  { label: '이용범위', dataKey: 'usageRange', widthPercent: 10, disableSort: false },
  { label: '라이선스', dataKey: 'license', widthPercent: 10, disableSort: false },
  { label: '만료일', dataKey: 'expireDt', widthPercent: 12, disableSort: false },
  { label: '갱신일', dataKey: 'LatestUpdatedDt', widthPercent: 16, disableSort: false },
  { label: '관리자', dataKey: 'writer', widthPercent: 10, disableSort: false },
  { label: '최초 구독 날짜', dataKey: 'FirstSubscribeDt', widthPercent: 16, disableSort: false },
];

export const projectListAttr: AttributeType<ProjectListAttr | Number>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 9, disableSort: true },
  { label: '프로젝트명', dataKey: 'prjName', widthPercent: 13, disableSort: true },
  { label: '소유자', dataKey: 'owner', widthPercent: 13, disableSort: true },
  { label: '라이선스', dataKey: 'license', widthPercent: 13, disableSort: false },
  { label: '카테고리', dataKey: 'category', widthPercent: 13, disableSort: true },
  { label: '생성일', dataKey: 'releasedDt', widthPercent: 13, disableSort: false },
  { label: '최신 배포일', dataKey: 'createdDt', widthPercent: 13, disableSort: false },
  { label: '상태', dataKey: 'prjStatus', widthPercent: 13, disableSort: false },
];

export const versionListAttr: AttributeType<VersionListAttr | Number | Temp>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 15, disableSort: true },
  { label: '버전명', dataKey: 'versionName', widthPercent: 35, disableSort: false },
  { label: '생성 날짜', dataKey: 'createdDt', widthPercent: 25, disableSort: false },
  { label: '라이선스 지킴이', dataKey: 'temp', widthPercent: 25, disableSort: true },
];

export const ossListAttr: AttributeType<OSSListAttr | Number | Trash>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 5, disableSort: true },
  { label: '소승 이름 또는 경로', dataKey: 'ossLocation', widthPercent: 25, disableSort: true },
  { label: 'OSS명', dataKey: 'ossName', widthPercent: 20, disableSort: true },
  { label: 'OSS 버전', dataKey: 'ossVersion', widthPercent: 5, disableSort: true },
  { label: '라이선스', dataKey: 'license', widthPercent: 20, disableSort: true },
  { label: 'OSS 관련 주소', dataKey: 'ossUrl', widthPercent: 20, disableSort: true },
  { label: '', dataKey: 'trash', widthPercent: 5, disableSort: true },
];

export const licenseListAttr: AttributeType<LicenseListAttr | Number | Trash>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 5, disableSort: true },
  { label: '라이선스명', dataKey: 'licenseName', widthPercent: 15, disableSort: true },
  { label: '라이선스 타입', dataKey: 'licenseType', widthPercent: 15, disableSort: true },
  { label: '규제', dataKey: 'restriction', widthPercent: 30, disableSort: true },
  { label: '라이선스 url', dataKey: 'licenseUrl', widthPercent: 30, disableSort: true },
  { label: '', dataKey: 'trash', widthPercent: 5, disableSort: true },
];
