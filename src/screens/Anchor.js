import React from 'react';

import { Anchor, Box } from 'grommet';
import { doc } from 'grommet/components/Anchor/doc';

import { Edit } from 'grommet-icons';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';

const desc = doc(Anchor).toJSON();

export default () => (
  <Page>
    <Doc
      name='Anchor'
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        color: 'accent-1',
        href: '//my.com/path',
        icon: '<Add />',
        label: ['Add', '<Box>...</Box>'],
        onClick: '() => {}',
      }}
      example={(
        <Box flex={true} justify='center' align='center'>
          <Anchor href='#' primary={true} label='For Example' />
        </Box>
      )}
      examples={{
        icon: <Anchor href='#' icon={<Edit />} />,
        label: <Anchor href='#' label='Edit' />,
        primary: <Anchor href='#' primary={true} label='Edit' />,
        reverse: <Anchor href='#' icon={<Edit />} label='Edit' reverse={true} />,
      }}
    />
  </Page>
);
