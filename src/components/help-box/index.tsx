import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Account Owner'];
  const roles = ['Account Owner', 'Team Member'];
  const applicationName = `DS`;
  const tenantName = `Organization`;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Title: Account Owner creates an organization
As an Account Owner,
I want to create an organization,
So that I can manage my company's information and requests.

Title: Account Owner invites Team Members
As an Account Owner,
I want to invite Team Members to join my organization,
So that they can access and contribute to the company's information and requests.

Title: Team Member accepts invitation
As a Team Member,
I want to accept an invitation to join an organization,
So that I can access and contribute to the company's information and requests.

Title: Account Owner requests a company review
As an Account Owner,
I want to request a company review from the expert network,
So that I can make informed investment decisions.

Title: Team Member requests a company review
As a Team Member,
I want to request a company review from the expert network,
So that I can contribute to the company's investment decisions.

Title: Account Owner requests a report
As an Account Owner,
I want to request a report from the expert network,
So that I can make informed investment decisions.

Title: Team Member requests a report
As a Team Member,
I want to request a report from the expert network,
So that I can contribute to the company's investment decisions.

Title: Account Owner requests an expert call
As an Account Owner,
I want to request an expert call from the expert network,
So that I can make informed investment decisions.

Title: Team Member requests an expert call
As a Team Member,
I want to request an expert call from the expert network,
So that I can contribute to the company's investment decisions.

Title: Account Owner accesses stored reports
As an Account Owner,
I want to access stored reports in the customer portal,
So that I can review and utilize them for investment decisions.

Title: Team Member accesses stored reports
As a Team Member,
I want to access stored reports in the customer portal,
So that I can review and utilize them for investment decisions.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="30px" bottom="20px" zIndex={3}>
      <Popover placement="top-end">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent w="50vw" h="70vh">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
