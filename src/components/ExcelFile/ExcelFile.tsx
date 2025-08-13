import * as XLSX from 'xlsx';
import { useState, useEffect, type ReactElement } from 'react';
import styled from 'styled-components';

type ExcelFileProps = {
  file: File | null;
};

type Row = Array<string | number | null>;

export const ExcelFile = ({ file }: ExcelFileProps): ReactElement => {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    if (!file) { setRows([]); return; }

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const buf = e.target?.result;
      if (!buf) return;
    
      const data = new Uint8Array(buf as ArrayBuffer);
      const wb = XLSX.read(data, { type: "array" });
    
      if (wb.SheetNames.length === 0) { setRows([]); return; }
    
      const firstSheetName = wb.SheetNames[0]!;
      const ws = wb.Sheets[firstSheetName]; 
    
      if (!ws) { setRows([]); return; }
    
      const arr = XLSX.utils.sheet_to_json<Row>(ws, { header: 1, defval: null });
      setRows(arr);
    };
    reader.readAsArrayBuffer(file);
    return () => reader.abort();
  }, [file]);

  if (!file || rows.length === 0) {
    return <EmptyView>엑셀파일</EmptyView>;
  }

  return (
    <PreviewWrap>
      <table>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c === null ? '' : String(c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </PreviewWrap>
  );
};

const PreviewWrap = styled.div`
  height: calc(100vh - 120px);
  overflow: auto;
  margin: 0 2rem;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;

  table { border-collapse: collapse; width: 100%; font-size: 0.9rem; }
  td, th { border: 1px solid #ddd; padding: 6px 8px; white-space: pre-wrap; }
  tr:nth-child(1) td { font-weight: 600; background: #f7f9fc; }
`;

const EmptyView = styled.div`
  height: calc(100vh - 120px);
  margin: 0 2rem;
  display: flex; align-items: center; justify-content: center;
  color: #8a8a8a; border: 1px dashed #ddd; border-radius: 8px;
  border: 1px solid #eee;
`;
