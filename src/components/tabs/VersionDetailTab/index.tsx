import React from 'react';
import TabTemplate from '@components/templates/TabTemplate';
import Button from '@components/widgets/Button';
import LineTable from '@components/widgets/LineTable';
import { ossAnalysisListAttr } from '@common/constants';
import * as Style from './styled';
import { GetVersionDetailResponseClientType } from '@@types/client';
import useFetch from '@hooks/useFetch';
import { getVersionDetailAPI } from '@apis/version';
import { getVersionDetailResponseServer2Client } from '@converter/version';
import { getRestrictionsAPI } from '@apis/data';
import { getRestrictionResponseServer2Client } from '@converter/data';

interface VersionDetailTabProps {
  projectId: number;
  versionId: number;
}

function VersionDetailTab({ projectId, versionId }: VersionDetailTabProps) {
  const { data: ossData } = useFetch<GetVersionDetailResponseClientType>(
    getVersionDetailAPI.dynamicUrl(projectId, versionId),
    {},
    { suspense: false },
    { response: getVersionDetailResponseServer2Client }
  );
  const { data: restrictions } = useFetch<string[]>(
    getRestrictionsAPI,
    {},
    { suspense: false },
    { response: getRestrictionResponseServer2Client }
  );

  const deleteVersion = () => {};

  const restrictionsHeader = [
    { label: '라이선스', dataKey: 'license' },
    ...(restrictions?.map((res) => ({ label: res, dataKey: res })) || []),
  ];
  const restrictionData =
    ossData?.analysisRestriction.map((license) => {
      const restrictions = license.restriction.reduce((acc, res) => {
        acc[res.restrictionName] = '⚫️';
        return acc;
      }, {} as any);
      return {
        license: license.licenseName,
        ...restrictions,
      };
    }) || [];

  return (
    <TabTemplate description="버전 상세보기">
      <Style.ButtonWrapper>
        <Button theme="warning" onClick={deleteVersion}>
          삭제하기
        </Button>
      </Style.ButtonWrapper>
      <Style.TableWrapper>
        <Style.TableTitle>사용중인 Open Source Software</Style.TableTitle>
        <LineTable columns={ossAnalysisListAttr} data={ossData?.ossAnalysis || []} />
      </Style.TableWrapper>
      <Style.TableWrapper>
        <Style.TableTitle>사용중인 Open Source Software의 라이선스 제약조건</Style.TableTitle>
        <LineTable columns={restrictionsHeader} data={restrictionData} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default VersionDetailTab;
