import React from 'react';

const MyTable = () => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 1</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 2</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 3</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 4</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 5</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 6</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 7DsdaDSAdsd</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 8</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 7</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 8dsDDdsaDSads</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 2</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 3</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 4</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 5</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 6</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 7DsdaDSAdsd</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 8</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 7</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 8dsDDdsaDSads</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 4</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 5</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 6</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 7</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 8</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 9</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 10</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 11</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 12</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 13</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 14</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 15</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 16</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
