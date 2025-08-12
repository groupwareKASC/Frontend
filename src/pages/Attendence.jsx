import React, { useState } from 'react'
import styled from 'styled-components'
import { Side } from '../components/SideBar/Side'
import { useForm } from "react-hook-form";
import { CheckGroup } from '../components/CheckField/CheckGroup';

// 지사 데이터
const  DPT_LIST = [
  { id: null, value: '지사를 선택하세요.' },
  { id: 1, value: '김포공항' },
  { id: 2, value: '김해공항' },
  { id: 3, value: '제주공항' },
  { id: 4, value: '청주공항' },
  { id: 5, value: '대구공항' },
  { id: 6, value: '무안공항' },
  { id: 7, value: '양양공항' },
  { id: 8, value: '광주공항' },
  { id: 9, value: '울산공항' },
  { id: 10, value: '여수공항' },
  { id: 11, value: '포항경주공항' },
  { id: 12, value: '사천공항지사' },
  { id: 13, value: '군산공항' },
  { id: 14, value: '원주공항' },
  { id: 15, value: '대구항로시설본부' },
  { id: 16, value: '인천항로시설본부' },
];

const SIDEBAR_WIDTH = '13.125vw';

const Attendence = () => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: { department: '' }, 
  });

  const [excelName, setExcelName] = useState("");
  const [erpName, setErpName] = useState("");

  const [excelFile, setExcelFile] = useState<File|null>(null);
  const [erpFile, setErpFile] = useState<File|null>(null);

  const onSubmit = (data) => {
    alert(data.department);
  };

  // 파일 업로드 이벤트 발생 시 파일명 저장
  const handleExcelChange = (e) => {
    const file = e.target.files?.[0] || null;
    setExcelName(file ? file.name : "");
    setExcelFile(file); 
  };
  
  const handleErpChange = (e) => {
    const file = e.target.files?.[0];
    setErpName(file ? file.name: "");
  }


  return (
    <>
    <SideBar>
      <Side
        buttons={[
          { label: '근태검증', path: '/Attendence'},
          { label: '변동비 (특별근무)', path: '/VariableCost'},
          { label: '변동비 (대체근무)', path: '/SubstituteCost'},
        ]}
      />
    </SideBar>

    <ExcelContentWrapper>
      <FormRow onSubmit={handleSubmit(onSubmit)}>
        {/* 지사 카테고리 */}
        <LabelSelectGroup>
          <Label htmlFor='department'>지사</Label>
          <SelectWrapper>
            <Select
              id="department"
              defaultValue=""
              {...register('department', { required: '지사를 선택하세요.' })}
              aria-invalid={!!errors.department}
            >
              <option value="" disabled>지사를 선택하세요.</option>
              {DPT_LIST.filter(el => el.id !== null).map((el) => (
                <option key={el.id} value={el.value}>{el.value}</option>
              ))}
            </Select>

            {errors.department && <ErrorMsg>{errors.department.message}</ErrorMsg>}
          </SelectWrapper>
        </LabelSelectGroup>

        {/* 엑셀 파일 업로드 */}
        <UploadGroup>
          <FileNameInput 
            type="text"
            value={excelName}
            placeholder="Excel 파일을 선택하세요"
            readOnly
          />
          <HiddenFileInput
            type='file'
            id='excelFile'
            {...register('excelFile', {required: 'Excel 파일을 선택하세요.'})}
            onChange={handleExcelChange}
          />
          <FileLabel htmlFor='excelFile'>Excel</FileLabel>
          {errors.excelFile && <ErrorMsg>{errors.excelFile.message}</ErrorMsg>}
        </UploadGroup>

        
        {/* ERP 파일 업로드 */}
        <UploadGroup>
          <FileNameInput 
            type="text"
            value={erpName}
            placeholder="ERP 파일을 선택하세요"
            readOnly
          />
          <HiddenFileInput
            type='file'
            id='erpFile'
            {...register('erpFile', {required: 'ERP 파일을 선택하세요.'})}
            onChange={handleErpChange}
          />
          <FileLabel htmlFor='erpFile'>ERP</FileLabel>
          {errors.erpFile && <ErrorMsg>{errors.erpFile.message}</ErrorMsg>}
        </UploadGroup>

        {/* 체크 박스 */}
        <CheckWrapper>
          <CheckGroup/>
        </CheckWrapper>
            
        {/* 버튼 */}
        <BtnWrapper>
          <SubmitBtn type="submit">비교하기</SubmitBtn>
          <DownloadBtn>다운로드</DownloadBtn>
        </BtnWrapper>
      </FormRow>


      <ExcelPrint>

      </ExcelPrint>
    </ExcelContentWrapper>
    </>
  )
}

const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${SIDEBAR_WIDTH};
`;

const ExcelContentWrapper = styled.div`
  margin-left: ${SIDEBAR_WIDTH};
  width: calc(100vw - ${SIDEBAR_WIDTH});
  height: 100vh;
  overflow: hidden;  
`;

const FormRow = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;     
  flex-wrap: wrap;  
  margin: 2rem;
  font-size:  1vw;
`;

const LabelSelectGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem; 
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: flex-start;
`;

const Label = styled.label`
  white-space: nowrap;     
`;

const Select = styled.select`
  border: 1px solid #ddd;
  width: 12vw;
  height: 3.24vh;
  box-sizing: border-box;
  font-size: 0.8vw;
`;

const UploadGroup = styled.div`
  column-gap: 0.3rem;     
  display: grid;
  grid-template-columns: 12vw 3.65vw;
  grid-auto-rows: min-content;
  align-items: center;
  grid-template-areas:
    "name btn"
    "err  err";
`;

const FileNameInput = styled.input`
  border: none;
  padding: 0.4rem;
  width: 10.42vw;
  font-size: 0.9rem;
  outline: none;
  border: 1px solid #ddd;
  height: 3.24vh;
  width: 12vw;
  box-sizing: border-box;
  font-size:  0.8vw;
`;


// 숨김 처리 
const HiddenFileInput = styled.input`
  display: none;
`;

// 버튼처럼 보이도록 스타일 추가
const FileLabel = styled.label`
  width: 3.65vw;
  height: 3.24vh;
  display: flex;
  align-items: center; 
  justify-content: center; 
  background-color: #9DBEE0; 
  color: white;
  cursor: pointer;
  font-size: 0.9vw;
  border-radius: 0.3125rem;
  &:hover {
    background-color: #7a94ae;
  }
`;

// 에러 문구 css
const ErrorMsg = styled.p`
  color: #d33;
  margin-top: 0.3rem;
  font-size: 0.75vw;
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  margin-left: auto;
  margin-right: 0.5rem;
`;

// 버튼 css
const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const SubmitBtn = styled.button`
  height: 3.24vh;
  width: 6vw;
  font-weight: 600;
  border-radius: 0.3125rem;
  border: 1px solid #DADADA;
  background: #FFF;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size:  0.8vw;

`;

const DownloadBtn = styled.button`
  height: 3.24vh;
  width: 6vw;
  font-weight: 600;
  color: white;
  border-radius: 0.3125rem;
  background: var(--Blue-2, #142F64);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size:  0.8vw;
`;

export default Attendence;