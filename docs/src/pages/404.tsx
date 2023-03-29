/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from '@klink-ui/core';
import GatsbyLink from '../components/MdxPage/MdxProvider/GatsbyLink/GatsbyLink';
import { components } from '../components/MdxPage/MdxProvider/MdxProvider';
import { PageHead } from '../components/PageHead/PageHead';

export default function PageNotFound() {
  const { li: Li, ul: Ul, h1: H1, a: A, p: P } = components;

  return (
    <>
      <Container size={1100}>
        <P>
          <H1>Congratulations!</H1>
          You've found a completely secret place on Klink UI website. Unfortunately, this is only a
          404 page. If you've landed on this page from a link on the Klink UI website, please{' '}
          <A href="https://github.com/mantinedev/klink-ui/issues/new">create an issue</A>.
          Otherwise, here are some learning materials that will help you get started with Klink UI:
        </P>
        <Ul>
          <Li>
            <GatsbyLink to="/pages/contributing/">Klink UI contributions guideline</GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/guides/ssr/">
              Learn how to setup server side rendering with Klink UI
            </GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/others/notifications/">Klink UI notifications system</GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/theming/klink-ui-provider/">
              Learn how to customize Klink UI theme
            </GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/hooks/use-merged-ref/">
              Learn how to merge react refs into single one
            </GatsbyLink>
          </Li>
        </Ul>
      </Container>
    </>
  );
}

export const Head = () => <PageHead title="404" disableTitleTemplate />;
