// Copyright (c) 2017 PlanGrid, Inc.

import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import FileViewer from './components/file-viewer';
import pdf from '../example_files/sample.pdf';

ReactDOM.render(
  <FileViewer
    fileType="pdf"
    filePath={pdf}
  />,
  window.document.getElementById('app')
);
