import { table } from '../table';

describe('table', () => {
  it('renders table correctly', () => {
    const headers = ['Name', 'Age', 'Country'];
    const rows = [
      ['John Doe', '30', 'USA'],
      ['Jane Smith', '25', 'Canada'],
      ['Bob Johnson', '40', 'Australia'],
    ];

    expect(table(headers, rows)).toMatchInlineSnapshot(`
      "| Name        | Age | Country   |
      | ----------- | --- | --------- |
      | John Doe    | 30  | USA       |
      | Jane Smith  | 25  | Canada    |
      | Bob Johnson | 40  | Australia |"
    `);
  });

  it('renders table without alignment', () => {
    const headers = ['Name', 'Age', 'Country'];
    const rows = [
      ['John Doe', '30', 'USA'],
      ['Jane Smith', '25', 'Canada'],
      ['Bob Johnson', '40', 'Australia'],
    ];

    expect(table(headers, rows, { compact: true })).toMatchInlineSnapshot(`
      "| Name | Age | Country |
      | - | - | - |
      | John Doe | 30 | USA |
      | Jane Smith | 25 | Canada |
      | Bob Johnson | 40 | Australia |"
    `);
  });

  it('renders table with empty headers and rows', () => {
    const headers: string[] = [];
    const rows: string[][] = [];

    expect(table(headers, rows)).toBe('');
  });

  it('renders table without rows', () => {
    const headers = ['Name', 'Age', 'Country'];
    expect(table(headers, [])).toMatchInlineSnapshot(`
      "| Name | Age | Country |
      | ---- | --- | ------- |"
    `);
  });

  it('escapes special characters', () => {
    const headers = ['Name', 'Age', 'Country'];
    const rows = [
      ['John\nDoe', '30', 'USA|Mexico'],
      ['Jane Smith\n\n', '25', 'Canada'],
      ['Bob Johnson', '40', 'Australia'],
    ];

    expect(table(headers, rows, { compact: true })).toMatchInlineSnapshot(`
      "| Name | Age | Country |
      | - | - | - |
      | John<br/>Doe | 30 | USA\\|Mexico |
      | Jane Smith<br/><br/> | 25 | Canada |
      | Bob Johnson | 40 | Australia |"
    `);
  });
});
