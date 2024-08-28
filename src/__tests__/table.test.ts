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

  it('renders table with empty headers and rows', () => {
    const headers: string[] = [];
    const rows: string[][] = [];

    expect(table(headers, rows)).toBe('');
  });

  it('renders table with empty cells', () => {
    const headers = ['Name', 'Age', 'Country'];
    const rows = [
      ['John Doe', '', 'USA'],
      ['', '25', ''],
      ['Bob Johnson', '40', 'Australia'],
    ];

    expect(table(headers, rows)).toMatchInlineSnapshot(`
      "| Name        | Age | Country   |
      | ----------- | --- | --------- |
      | John Doe    |     | USA       |
      |             | 25  |           |
      | Bob Johnson | 40  | Australia |"
    `);
  });
});
